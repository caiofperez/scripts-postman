const schema={}
pm.test("Response retorna o contrato esperado",function(){pm.response.to.have.jsonSchema(schema)});

const token = pm.response.json();
pm.enviroment.set("token",token.data.token);

var jsonData = pm.response.json();
if(jsonData.access_token != null){
    pm.collectionVariables.set("AccessToken", jsonData.access_token);
}