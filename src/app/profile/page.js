import BankAccountForm from "./components/BankAccountForm";
import Link from "next/link";
import PersonalInfo from "./components/PersonalInfo";
import ShowBankAccount from "./components/ShowBankAccount";
// import { DataProvider } from "./context/DataContext";

function ProfilePage() {
  return (
    <div>
      <PersonalInfo />
      <BankAccountForm />
      
      {/* <DataProvider>
      <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <ShowBankAccount/>
      </div>
      </DataProvider> */}
    </div>
  );
}

export default ProfilePage;
