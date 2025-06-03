# User API

Bu loyiha foydalanuvchilarni ro'yxatdan o'tkazish, login qilish, ma'lumotlarni yangilash, o'chirish va barcha foydalanuvchilar ro'yxatini olish uchun RESTful API ni taqdim etadi.

---

## API Endpoints

| Method | URL                    | Description               | Middleware & Validation                  |
|--------|------------------------|---------------------------|-----------------------------------------|
| POST   | `/api/users/v1/register` | Foydalanuvchini ro'yxatdan o'tkazish | `registerValidate` (Joi schema), `UserController.register`, `jwtMiddleware` |
| POST   | `/api/users/v2/login`    | Foydalanuvchi login qilish | `loginValidation` (Joi schema), `UserController.login`, `jwtMiddleware`    |
| PUT    | `/api/users/v3/update`   | Foydalanuvchi ma'lumotlarini yangilash | `checkToken`, `updateValidation` (Joi schema), `UserController.updateUser`, `userResponseHandler` |
| DELETE | `/api/users/v4/delete`   | Foydalanuvchini o'chirish | `checkToken`, `UserController.deleteUser`, `userResponseHandler`           |
| GET    | `/api/users/v5/getall`   | Barcha foydalanuvchilar ro'yxatini olish | `UserController.getAll`, `userResponseHandler`                             |

---

## Validation qoidalari

### 1. Ro'yxatdan o'tish (Register)

| Field    | Type   | Required | Description                                |
|----------|--------|----------|--------------------------------------------|
| username | string | ha       | Minimal 3, maksimal 49 ta belgi            |
| email    | string | ha       | Email formatida, minimal uzunlik 11 ta     |
| password | string | ha       | Minimal 8, maksimal 32 ta belgi            |
| gender   | string | yo'q     | `male` yoki `female`                        |
| birthday | string | yo'q     | Sana formati `YYYY-MM-DD` bo'lishi kerak  |

**Qoidalar:**

- `username` kamida 3 ta va ko'pida 49 ta belgidan iborat bo'lishi kerak.
- `email` haqiqiy email manzil formatida bo'lishi shart.
- `password` uzunligi 8 dan kam va 32 dan ko'p bo'lmasligi kerak.
- `gender` faqat `male` yoki `female` qabul qiladi.
- `birthday` esa `YYYY-MM-DD` formatida bo'lishi zarur.

### 2. Login qilish (Login)

| Field    | Type   | Required | Description                      |
|----------|--------|----------|---------------------------------|
| username | string | ha       | Minimal 3, maksimal 49 ta belgi  |
| password | string | ha       | Minimal 8, maksimal 32 ta belgi  |

### 3. Ma'lumotlarni yangilash (Update)

| Field    | Type   | Required | Description                              |
|----------|--------|----------|-----------------------------------------|
| username | string | yo'q     | Minimal 3, maksimal 49 ta belgi          |
| email    | string | yo'q     | Email formatida, minimal uzunlik 11 ta   |
| password | string | yo'q     | Minimal 8, maksimal 32 ta belgi          |
| gender   | string | yo'q     | `male` yoki `female`                      |
| birthday | string | yo'q     | Sana formati `YYYY-MM-DD` bo'lishi kerak |

**Eslatma:** Kamida bittasi yuborilishi kerak (`min(1)`).

---

## Foydalanish misoli (Example Request)

```bash
curl -X POST http:///16.170.229.196:15975/api/users/v1/register \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "fayzullo",
    "email": "fayzullo@example.com",
    "password": "strongpassword123",
    "gender": "male",
    "birthday": "1990-01-01"
}'
```

----
```json
{
    "username": "fayzullo",
    "email": "fayzullo@example.com",
    "password": "strongpassword123",
    "gender": "male",
    "birthday": "1990-01-01"
}
```