# Consuming API's with Angular's $http Service

_Ira Herman_

---

## Objectives

By the end of this lesson, you will be able to:

*	Use angular's $http to consume an API resource
*	Present the API call in an installable mobile app using [Ionic](http://ionicframework.com)

---

## Roadmap

* Demo - Bowties App
* Objects (Review)
	* Literals
	* Constructors
* Inspect API response in Chrome
* $http
	* Methods
	* .then (promises)
	* Response Object
	* Error handling
* Lab
	* Detail View
	* Meetup API

---

##Demo

---

##Objects (Review)

### Literals
	var bowtie = { 
	  id: 1,
	  material: "silk",
	  pattern: "houndstooth",
	  style: "slim",
	  image_url: "http://www.thetiebar.com/database/products/BS178_l.jpg",
	  retail_price: 24.95,
	  description: "This houndstooth bowtie is made from top quality silk."
	}

---

##Objects (cont)
### Constructors
	function person(first, last, age, eye) {
	    this.firstName = first;
	    this.lastName = last;
	    this.age = age;
	    this.eyeColor = eye;
	}

	var bob = new person("Bob", "Smith", 50, "blue");

---

##Inspect API response in Chrome

Let's plan by looking at our API response in Chrome (with JSON View).

[http://bowties.herokuapp.com/api/bowties](http://bowties.herokuapp.com/api/bowties)

---

##$http Methods

* $http.get
* $http.post
* $http.put
* $http.patch
* $http.delete

---

##$http .then

###The "Promise"

Code to run _after_ the response comes back

Success and Error callbacks:

	.then(function successCallback(response) {
	    // this callback will be called asynchronously
	    // when the response is available
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

---

##$http response object


* **data** – {string|Object} – The response body transformed with the transform functions.
* **status** – {number} – HTTP status code of the response.
* **headers** – {function([headerName])} – Header getter function.
* **config** – {Object} – The configuration object that was used to generate the request.
* **statusText** – {string} – HTTP status text of the response.

---

##Lab Time!
![](http://www.clker.com/cliparts/8/b/1/8/12375604602121138608pitr_Lab_icon_3.svg.med.png)

###Detail View:

When you click a bowtie, it should show a detail view. 

Hint: The API supports passing an ID to get JSON for just that one item:
	`http://bowties.herokuapp.com/api/bowties/1`

---

##Bonus Challenge Lab:

###Meetup.com App
Build an app that consumes Meetup.com. See `bonus_lab_meetup_app.md` for full details.


---

## Review

* Objects (Review)
	* Literals
	* Constructors
* Inspect API response in Chrome
* $http
	* Methods
	* .then (promises)
	* Response Object
	* Error handling
* Lab
	* Detail View
	* Meetup API

---

## Resources

* [Angular $http documentation](https://docs.angularjs.org/api/ng/service/$http)
* [Ionic components](http://ionicframework.com/docs/components/)