<?php 



if (!empty($_POST['title'])) {
        $params['title'] = $_POST['title'];
        $str = file_get_contents('http://localhost/training-web/New%20folder%20(2)/data.json');
        if($str != null){
            $data = json_decode($str);
            array_push($data , $params);
            $data = json_encode($data);
           
        }else{
            $data = json_encode($params);
        }
        print_r($data);
        file_put_contents('data.json', $data);
        return 'Data Added';
    }else{
        foreach($_POST as $val ){
            echo $val.'<br>';
        }
    }



