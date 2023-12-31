<?php 
	header('Access-Control-Allow-Origin: *');
	//設置 CORS（跨源資源共享）
	header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
	header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
	try{
		require_once("connectDailyTW.php");
		// print_r($_POST);
		$email = $_POST["email"];
		//  $email = "Jeffery@testmail.com";
		//"email"跟LoginView的params.append("email", this.email); 做呼應
		$psw = $_POST["psw"];
		// $psw = "test123";
		// $psw = "865nQtf2";
		$sql = "select *
		from member
		where mem_email=:email AND mem_psw = :psw";
        $member = $pdo->prepare($sql);
        $member->bindValue(':email', $email);
        $member->bindValue(':psw', $psw);
        $member->execute();
		
		// echo json_encode($memberRow);
		// exit();
		
		if ($member->rowCount() === 0) {
			echo json_encode([0]);
		}else{
			$memberRow = $member->fetch(PDO::FETCH_ASSOC);
			// 登入成功，將登入者的資料寫入session
			session_start();
			$_SESSION["mem_id"] = $memberRow["mem_id"];
			$_SESSION["mem_psw"] = $memberRow["mem_psw"];
			$_SESSION["mem_email"] = $memberRow["mem_email"];
			$_SESSION["mem_birth"] = $memberRow["mem_birth"];
			echo json_encode($memberRow);	
		}
		
		// echo json_encode(["連線成功"]);
	}catch(Exception $e){
		// echo "連線失敗";
		echo json_encode(["連線失敗"]);
	}

?>
