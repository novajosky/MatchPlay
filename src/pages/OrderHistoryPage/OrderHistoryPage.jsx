import * as userService from '../../utilities/users-service';

export default function OrderHistory() {

  async function handleCheckToken() {
    const expDate = await userService.checkToken()
      console.log(expDate);
  }

  return (
    <>
      <h1>
        Order History
      </h1>
      <button onClick={handleCheckToken}>Check When my Login Expires</button>
      
    </>
  );
}
