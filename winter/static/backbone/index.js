var ContactModel = Backbone.Model.extend({ 
  	getFullName:function(){
        return this.get('firstName') +' '+ this.get('lastName');
    }
});
 
var contact1Model = new ContactModel(
   	{firstName:'John',lastName:'Doe',phone:'111-111-1111'}
);
 
var contact2Model = new ContactModel( 
    {firstName:'Jane',lastName:'Doe',phone:'222-222-2222'}
);
 
console.log(contact1Model.getFullName()); //logs John Doe
console.log(contact2Model.getFullName()); //logs Jane Doe