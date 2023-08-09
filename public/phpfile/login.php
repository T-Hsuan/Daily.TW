<?php 
	header('Access-Control-Allow-Origin:*');
	// header("Content-Type:application/json;charset=utf-8");

	try {
		//引入連線工作的檔案
		require_once("connectDailyTW.php");
	
	} catch (\PDOException $e) {
		throw new \PDOException($e->getMessage(), (int)$e->getCode());
	}
	
	// SQL 查詢
	$stmt = $pdo->query("SELECT * FROM member");
	$data = $stmt->fetchAll();
	
	// 輸出 JSON
	echo json_encode($data);

// try {
// 	//引入連線工作的檔案
// 	require_once("connectDailyTW.php");
	
// 	//執行sql指令並取得pdoStatement
// 	$sql = "select * from member";
// 	$products = $pdo->query($sql); 
// 	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
//   echo json_encode($prodRows);

// } catch (Exception $e) {
// 	echo "錯誤行號 : ", $e->getLine(), "<br>";
// 	echo "錯誤原因 : ", $e->getMessage(), "<br>";
// 	//echo "系統暫時不能正常運行，請稍後再試<br>";	
// }
?>