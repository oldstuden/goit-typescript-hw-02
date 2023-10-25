/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(
  existData: User,
  initialValues: Partial<User>
): User {
  return { ...existData, ...initialValues };
  // Оновлення користувача
}

const existUser: User = {
  name: 'Nick',
  surname: 'Root',
  email: 'nick@mail.com',
  password: 'nick&123',
};
const updateUser = createOrUpdateUser(existUser, {
  email: 'user@mail.com',
  password: 'password123',
});
console.log(updateUser);
export { createOrUpdateUser };
