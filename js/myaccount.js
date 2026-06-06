document.getElementById("btn-login").onclick = function () {
                        var val = document.getElementById("email").value.trim();
                        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        var phonePattern = /^0\d{9}$/;
                        if ((emailPattern.test(val))||(phonePattern.test(val))) {
                            alert("Login successful");
                        }
                        else {
                            alert("Pls enter a vaild email or phone nums");
                        }
                    }