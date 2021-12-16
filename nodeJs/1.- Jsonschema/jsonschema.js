const schemaProperties= {
    field1: {
        required: true,
        description: 'field1 se utiliza para x',
        type: 'string',
        pattern: '^[\\.0-9A-Za-z- ]{1,50}$',
        parameters: 'body',
    },
},


router.post('endpoint', SchemaMiddleware.validate(schemaProperties), controller.fuction)





class SchemaMiddleware{

    validate(schemaProperties){
        return (req, res, next) => {

         
                const validator = new jsonschema.Validator();
                const schema = {
                  type: 'object',
                  properties
                };
                return validator.validate(request, schemaProperties).errors;
              
    }
}