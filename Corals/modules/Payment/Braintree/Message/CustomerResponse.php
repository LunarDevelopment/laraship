<?php

namespace Corals\Modules\Payment\Braintree\Message;

/**
 * CustomerResponse
 */
class CustomerResponse extends Response
{
    public function getCustomerData()
    {
        if (isset($this->data->customer)) {
            return $this->data->customer;
        }

        return null;
    }
}
