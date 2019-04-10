# APIS DESCRIPTION
## Audits
### /audit/{entity}

Get all Audit as a json array.

```json
[
	{
		"attribute1": val1,
		 "attribute2": "val2",
		 "attributen": "valn"
	},
	{
		"id": 83,
		"timestamp": 1552947979684,
		"username": "ANONYMOS",
		"email": "email@email.com",
		"revisionDate": 1552947979684
	},
		"<MODIFICATION_TYPE>",
	{
		<ATTRIBUTE_UPDATED>
	}
]
```

The `<MODIFICATION_TYPE>` has 3 values: 

 * ADD
 * MOD
 * DEL



if `<MODIFICATION_TYPE>` value is `MOD` the 3nd object will containe all updated fields of the entity
otherwise is `null`

#### Example:
```` json
[	[
		{
		  "idAction": 1,
		  "objetAction": "Object 1",
		  "action": "Action_NAME 1",
		  "docActionFiles": null,
		  "dateAction": 1552863600000
		},
		{
		  "id": 83,
		  "timestamp": 1552947979684,
		  "username": "ANONYMOS",
		  "email": "ANONYMOS@ANONYMOS.com",
		  "revisionDate": 1552947979684
		},
		"ADD",
		null
  ],[
		{
		  "idAction": 3,
		  "objetAction": "Object 3",
		  "action": "Action_NAME 3",
		  "docActionFiles": null,
		  "dateAction": 1552863600000
		},
		{
		  "id": 86,
		  "timestamp": 1552947979724,
		  "username": "ANONYMOS",
		  "email": "ANONYMOS@ANONYMOS.com",
		  "revisionDate": 1552947979724
		},
		"DEL",
		null
  ],[
		{
		  "idAction": 4,
		  "objetAction": "Object 3",
		  "action": "Action # 1 #",
		  "docActionFiles": null,
		  "dateAction": 1552863600000
		},
		{
		  "id": 88,
		  "timestamp": 1552947979749,
		  "username": "ANONYMOS",
		  "email": "ANONYMOS@ANONYMOS.com",
		  "revisionDate": 1552947979749
		},
		"MOD",
		{
		  "action": "Action_NAME 3"
		}
  ] ]
````
The entity ACTION has an attribute named 'action' and is updated to "Action_NAME 3"



### /audit/{entity}/{int}
`int` is a number of the operation:

* `0` mean `ADD`
* `2` mean `MOD`
* `3` mean `DEL`

This rest will retreive all audits of sush Entity with specific operation





### OTHER REST

If you want to add more data to the audit, you have just to make an operation to an entity (Add new Entity, Delete, Update)

The JSON specified in all the rest is exactly your model presented in the source code `src/app/models`


#The tasks are created as an issues of repository

# The APIs are accessible using this url
## swagger:
	http://151.80.136.199:8080/swagger-ui.html