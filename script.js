var status = new Vue( {
	el: "#status",
	data: { title: "Tech Menu Status", items: [
		{name: "Undecided", type: "maybe"},
		{name: "WIP", type: "maybe"},
		{name: "Experimental", type: "buy"},
		{name: "Testing", type: "buy"},
		{name: "POC", type: "maybe"},
		{name: "Default", type: "hold"},
		{name: "Limited", type: "hold"},
		{name: "Deprecated", type: "sell"},
		{name: "Don't use", type: "sell"}
	]}
});

var taxonomy = new Vue ( {
	el:  "#taxonomy",
	data: { title: "Tech Menu Taxonomy", 
	items: [ 
	{name: "service"}, 
	{name: "infrastructure"}, 
	{name: "programming tools"}, 
	{name: "operations"}, 
	{name: "testing tools"}
	]}
});

var techmenu = new Vue ( {
	el: "#techmenu",
	data: { title: "Techmenu Components", 
		search: "",
		searchStatus: "Ready",
		components: [
		{name:"Java",component:"Programming Language"},
		{name:"Ruby",component:"Another Programming Language"},
		{name:"Php",component:"Strange Programming Language"},
		{name:"Scala",component:"Functional Programming Language"},
		{name:"Javascript",component:"Lingua Franca Web Programming Language"}
	]},
	computed: {
		total: function(){
			return this.components.length;
		},
		searchButtonDisabled: function() {
			return this.search == "";
		}
	},
	filters: {
		capitalize: function(value){
			if(!value) return "";
			value = value.toString();
			console.log( "capitalizing " + value);
			return "*"+value.charAt(0).toUpperCase() + value.slice(1) ;

		}
	},
	watch: {
		search: _.debounce( function(){
			this.searchStatus = this.search !== ""? "Searching for "+ this.search: "Ready";
		}, 2000)
	},
	methods: {
		addComponent: function() {
			var input = document.getElementById("addComponent");
			console.log("Found element "+input.value);
			if( input.value !== ""){
				this.components.push({name: input.value});
				input.value = "";
			}
		},
		removeComponent: function(index) {
			this.components.splice(index, 1)
		},

		searchComponent: function() {
			console.log("Searching "); 
		}
	}

});