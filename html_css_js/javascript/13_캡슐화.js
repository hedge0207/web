var Person = function(arg) {
    var name = arg ? arg : ''
  
    this.getName = function() {
      return name
    };
  
    this.setName = function(arg) {
      name = arg
    };
  }
//   console.log(name)    // ReferenceError: name is not defined

  var me = new Person('Lee')
  
  var myName = me.getName()

  console.log(myName)	// Lee
  
  me.setName('Kim')
  myName = me.getName()
  
  console.log(myName)	// Kim