//backend use
import { useMutation } from "@apollo/client";
import { CREATE_CUSTOMER_TOKEN } from "../graphQL/Mutations";

async function CustomerCreateToken({email,password}) {
    console.log("ran")
    console.log("email:", email, "password:", password)
    const variables = {
        input: {email: email, password: password}
    }

    const [createCustomerToken, { error, loading, data }] = useMutation(CREATE_CUSTOMER_TOKEN,{
        variables: variables,
      });

    await createCustomerToken();
    if(data) {
        console.log(data);
    }
}

export default CustomerCreateToken;