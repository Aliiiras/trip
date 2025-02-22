import { object, string } from "yup";

const bankAcountSchema = object({
  shaba_code: string().required("شماره شبارا وارد کنید"),
  debitCard_code: string().length(16, "شماره کارت باید ۱۶ عدد باشد").required(),
  accountIdentifier: string()
    .min(8, "باید حداقل ۸ کاراکتر باشد")
    .max(16)
    .required(),
});

const personalInfoSchema = object({
  firstName: string().min(2).required("نام را وارد کنید"),
  lastName: string().min(2).required("نام خانوادگی را وارد کنید"),
  nationalCode: string()
    .length(10, "کد ملی باید ۱۰ رقم باشد")
    .required("کد ملی الزامی است"),
  phoneNumber: string()
    .matches(/^09[0-9]{9}$/, "شماره موبایل نامعتبر است")
    .required("شماره موبایل الزامی است"),
    email: string().email("ایمیل معتبر وارد کنید").required("ایمیل الزامی است")

});

export { bankAcountSchema , personalInfoSchema};
