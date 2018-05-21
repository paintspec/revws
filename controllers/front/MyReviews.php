<?php
/**
* Copyright (C) 2017 Petr Hucik <petr@getdatakick.com>
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@getdatakick.com so we can send you a copy immediately.
*
* @author    Petr Hucik <petr@getdatakick.com>
* @copyright 2018 Petr Hucik
* @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*/
use \Revws\Settings;
use \Revws\Visitor;
use \Revws\Permissions;
use \Revws\FrontApp;

class RevwsMyReviewsModuleFrontController extends ModuleFrontController {
  public $module;

  public function __construct() {
    $this->display_column_right = false;
    $this->display_column_left = false;
    parent::__construct();
    $this->context = Context::getContext();
  }

  public function initContent() {
    parent::initContent();
    if ($this->isLoggedIn()) {
      $this->renderContent($this->module->getVisitor(), $this->module->getPermissions());
    } else {
      Tools::redirect('index.php?controller=authentication&back='.urlencode($this->selfLink()));
    }
  }

  private function renderContent(Visitor $visitor, Permissions $permissions) {
    $frontApp = $this->module->getFrontApp();
    $customerId = $visitor->getCustomerId();
    $list = $frontApp->addList('customer', $customerId);


    $params = $this->getParams();
    $reviewProduct = (isset($params['review-product'])) ? (int)$params['review-product'] : null;
    if ($reviewProduct && $permissions->canCreateReview($reviewProduct)) {
      $frontApp->addInitAction([
        'type' => 'TRIGGER_CREATE_REVIEW',
        'productId' => $reviewProduct
      ]);
    }

    $this->context->smarty->assign([
      'reviewList' => $list->getData(),
      'visitor' => $frontApp->getVisitorData(),
      'reviewEntities' => $frontApp->getEntitites(),
      'reviewsData' => $frontApp->getStaticData()
    ]);
    $this->setTemplate('my-reviews.tpl');
  }

  private function isLoggedIn() {
    return $this->context->customer->isLogged();
  }

  private function selfLink() {
    return $this->context->link->getModuleLink('revws', 'MyReviews', $this->getParams());
  }

  private function getParams() {
    $params = [];
    if (Tools::getValue('review-product')) {
      $params['review-product'] = (int)Tools::getValue('review-product');
    }
    return $params;
  }

}
