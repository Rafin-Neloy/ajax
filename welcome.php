<?php 


include 'dataread.php';


if(isset($_GET['username'])){
	$allSearchedUsers = searchUser($_GET['username']);
	
	echo "UserName ". $allSearchedUsers['username'] ."<br>";
	


}
else{
	echo "Error";
	return;
}
?>