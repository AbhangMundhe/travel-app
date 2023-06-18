import "./Login.css";
function Login() {
    return (
      <>
      <div className="row">
            <div className="col-sm-12 col-md-12">
        <section style="background-image: url(20211205_173449.jpg);"/>
        
            <div className="loginbox">
            <img src="logo.jpeg" className="avatar">
            <div className="pad">
                <h1 className="Login" >Login Here</h1>
                <form className="frm">
                    <p style="padding-top: 5%;">Username</p>
                    <input type="text" name= "" placeholder="Enter Username" required style="padding-top: 2%; color: black;">
                    <p style="padding-top: 2%;">Password</p>
                    <input type="Password" name="" placeholder="Enter Password" required style="padding-top: 2%; color: black;">
                    <input type="submit" name="" value="Login"><br>
                    <a href="#" style="color: blue;">Forget your Password?</a><br>
                    <a href="#" style="color: blue;">Don't have account?</a>

            </form>
            </div>
            </div>
        </section>
        </div>
    </div>
      </>
    );
  }
  
  export default FormGroupExample;