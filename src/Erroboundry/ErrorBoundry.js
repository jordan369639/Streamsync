const fallBack = ({error,resetErrorBoundry})=>{
return(
<>

<div className="errorPage">

<p>{error.message}</p>
<pre>Somethimg went wrong !!!</pre>
<button onClick={()=> resetErrorBoundry}></button>



</div>


</>




)

}
export default fallBack;