import CreateAccountForm from "../Components/CreateAccountForm";

const CreateAccountPage = ({ setLoggedInSoldier }) => {
  return (
    <div className="primary-content">
      <h1 className="page-title">Create Account</h1>
      <CreateAccountForm setLoggedInSoldier={setLoggedInSoldier} />
    </div>
  );
};

export default CreateAccountPage;
