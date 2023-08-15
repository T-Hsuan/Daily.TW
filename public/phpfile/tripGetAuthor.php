<?php 
	header('Access-Control-Allow-Origin:*');
	header("Content-Type:application/json;charset=utf-8");
try {
	//引入連線工作的檔案
	require_once("connectDailyTW.php");
	
	//執行sql指令並取得pdoStatement
	$sql = "SELECT mem_
		FROM trip
		WHERE trip_id = 1;
			";
	$authorInfo = $pdo->prepare($sql); 
    $authorInfo->execute();

	if( $authorInfo->rowCount() === 0 ){ //找不到
        //傳回空的JSON字串
        echo "{}";
    }else{ //找得到
        //取回所有資料
        $authorInfoRow = $authorInfo->fetchAll(PDO::FETCH_ASSOC);
        //送出json字串
        echo json_encode($authorInfoRow);
    }


} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>