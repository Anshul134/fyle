# fyle
<b>Access APIs using POSTMAN</b><br>
<ul>
<li>GET TOKEN:-
	https://limitless-ocean-11293.herokuapp.com/getToken</li>

<li>API to fetch a bank details, given branch IFSC code:-<br>
	https://limitless-ocean-11293.herokuapp.com/bank?ifsc=&lt;ifsc&gt;&amp;token=&lt;JWT token&gt;
	<br><br>
<b>Sample api	:-  https://limitless-ocean-11293.herokuapp.com/bank?ifsc=ABHY0065001&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYXNhZGEyMTMiLCJpYXQiOjE1NjY1MzY5NjIsImV4cCI6MTU2Njk2ODk2Mn0._r4zkoRSxO-WrDE90lzs8yEbYH3quiYtWifqZ6OpyTs </b>
	</li>
		<br><br>
	<li>
		GET API to fetch all details of branches, given bank name and a city :- <br>
		https://limitless-ocean-11293.herokuapp.com/branch?city=&lt; city &gt;&name= &lt; name &gt; &token= &lt;JWT token&gt; <br></br>
		<b>Sample API:-  https://limitless-ocean-11293.herokuapp.com/branch?city=MUMBAI&name=ABHYUDAYA COOPERATIVE BANK LIMITED&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYXNhZGEyMTMiLCJpYXQiOjE1NjY1MzY5NjIsImV4cCI6MTU2Njk2ODk2Mn0._r4zkoRSxO-WrDE90lzs8yEbYH3quiYtWifqZ6OpyTs&limit=20&offset=3</b>
	</li>
</ul>
	<h4> <p style="text-decoration: underline;"> P.S. Both APIs support <b>Offset  & limit </b> params. Default values of 0 and 25 have been enable at the backend. To provide custom values of these params, append their values at end of abbove APIs</p></h4>
	<br><br><br>
	<b>	Access APIs using CURL</b><br>
	<ul>
<li>GET TOKEN:-
	curl https://limitless-ocean-11293.herokuapp.com/getToken</li>

<li>API to fetch a bank details, given branch IFSC code:-<br>
<b>Sample api	:-</b> <br> curl -X GET   -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYXNhZGEyMTMiLCJpYXQiOjE1NjY1MzY5NjIsImV4cCI6MTU2Njk2ODk2Mn0._r4zkoRSxO-WrDE90lzs8yEbYH3quiYtWifqZ6OpyTs'  'https://limitless-ocean-11293.herokuapp.com/bank?ifsc=ABHY0065001'
	</li>
		<br><br>
	<li>
		GET API to fetch all details of branches, given bank name and a city :-<br>
		<b>Sample API:-  <br>
		curl -X GET   -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYXNhZGEyMTMiLCJpYXQiOjE1NjY1MzY5NjIsImV4cCI6MTU2Njk2ODk2Mn0._r4zkoRSxO-WrDE90lzs8yEbYH3quiYtWifqZ6OpyTs'  'https://limitless-ocean-11293.herokuapp.com/branch?city=MUMBAI&name=ABHYUDAYA%20COOPERATIVE%20BANK%20LIMITED'
	</li>
</ul>
