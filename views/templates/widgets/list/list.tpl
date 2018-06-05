{*
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
*
*
*                             WARNING
*
*   do NOT MODIFY this template unless you modify javascript as well
*
*
*}
{strip}
{if $reviewList}
<div class="revws-review-list">
{foreach from=$reviewList.reviews item=review}
  {if $reviewStyle === 'item'}
    {include
      file='modules/revws/views/templates/widgets/list/item.tpl'
      review=$review
      shopName=$shopName
      shape=$shape
      criteria=$criteria
      displayCriteria=$displayCriteria
      microdata=$microdata
    }
  {else}
    {include
      file='modules/revws/views/templates/widgets/list/item-with-product.tpl'
      review=$review
      shopName=$shopName
      shape=$shape
      criteria=$criteria
      displayCriteria=$displayCriteria
      microdata=$microdata
    }
  {/if}
{/foreach}
</div>
{if $allowPaging && $reviewList.pages > 1}
  {include file='modules/revws/views/templates/widgets/list/paging.tpl' }
{/if}
{/if}
{/strip}