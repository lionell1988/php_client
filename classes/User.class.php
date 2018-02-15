<?php

class User {
    public $name;
    public $password;
    
    public function __construct($n, $p) {
        $this->name = $n;
        $this->password = $p;
    }
    
}
