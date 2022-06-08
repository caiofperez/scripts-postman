const schema={jsonSchema}
pm.test("Response retorna o contrato esperado",function(){pm.response.to.have.jsonSchema(schema)});

const schema={jsonSchema}
pm.test("Response retorna o contrato esperado",function(){
    let nome_da_variavel = pm.response.json();
    let isSchemaValid = tv4.validate(nome_da_variavel , schema);
    if (!isSchemaValid) console.log(tv4.error.message);
    pm.expect(isSchemaValid).to.be.true;
   });

const token = pm.response.json();
pm.enviroment.set("token",token.data.token);

var jsonData = pm.response.json();
if(jsonData.access_token != null){
    pm.collectionVariables.set("AccessToken", jsonData.access_token);
}