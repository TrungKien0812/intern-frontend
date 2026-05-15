import * as Yup from "yup";
import { isMssvExists } from "../services/studentList";

export const studentInitialValues = {
  mssv: "",
  name: "",
  age: "",
  classname: "",
};

export function createStudentSchema({ isEdit = false } = {}) {
  return Yup.object({
    mssv: Yup.string()
      .trim()
      .required("MSSV không được để trống")
      .matches(/^\d+$/, "MSSV phải là số")
      .min(4, "MSSV phải có ít nhất 4 chữ số")
      .test(
        "unique-mssv",
        "MSSV đã tồn tại trong hệ thống",
        (value) => isEdit || !isMssvExists(value),
      ),
    name: Yup.string()
      .trim()
      .required("Tên không được để trống")
      .min(2, "Tên phải có ít nhất 2 ký tự")
      .matches(/^[a-zA-ZÀ-ỹ\s]+$/, "Tên chỉ được chứa chữ cái và khoảng trắng"),
    age: Yup.string()
      .trim()
      .required("Tuổi không được để trống")
      .matches(/^\d+$/, "Tuổi phải là số nguyên")
      .test("age-range", "Tuổi phải từ 16 đến 100", (value) => {
        const ageNum = Number(value);
        return ageNum >= 16 && ageNum <= 100;
      }),
    classname: Yup.string()
      .trim()
      .required("Lớp không được để trống")
      .min(2, "Lớp phải có ít nhất 2 ký tự"),
  });
}
