<script type="text/javascript">


    function verifmontant(){
               let  montant =document.getElementById("montant").value ;
               if((montant=="") )
                { document.getElementById("s1").innerHTML=" * champ obligatoire";
                document.getElementById("s1").style.color = "red";
                document.getElementById("montant").style.borderColor = "red";
                }
               
               	else 
               { document.getElementById("s1").innerHTML=" &#10004";
                 document.getElementById("s").style.color = "green"; 
                 ocument.getElementById("montant").style.borderColor = "green";
                }
               }
            }

</script>