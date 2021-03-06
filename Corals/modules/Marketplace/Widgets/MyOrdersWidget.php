<?php

namespace Corals\Modules\Marketplace\Widgets;

use \Corals\Modules\Marketplace\Models\Order;

class MyOrdersWidget
{

    function __construct()
    {
    }

    function run($args)
    {

        $orders = Order::where('user_id', user()->id)->count();
        return ' <!-- small box -->
            <div class="card">
                <div class="small-box bg-blue card-body">
                    <div class="inner">
                        <h3>' . $orders . '</h3>
                        <p>' . trans('Marketplace::labels.widget.my_order') . '</p>
                    </div>
                    <div class="icon">
                        <i class="fa fa-shopping-cart"></i>
                    </div>
                    <a href="' . url('marketplace/orders/my') . '" class="small-box-footer">
                        ' . trans('Corals::labels.more_info') . '
                    </a>
                </div>
                </div>';
    }

}
