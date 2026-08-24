import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./form.css"

function UserForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      age: "",
      role: "",
      agree: false,
    },
  });

  const onSubmit = async (data) => {
    const res = await fetch("http://127.0.0.1:8000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
  
    const result = await res.json();
    console.log(result);
  
    if (result.success) {
      alert(result.message);
      reset();
      // 🔹 Redirect to /list page
      navigate("/");
    } else {
      navigate("/error", {
        state: {
          message: "Form Not submit",
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>User Registration</h2>

      {/* Name */}
      <div className="form-group">
        <label>Name</label>
        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
          placeholder="Enter name"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Enter email"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      {/* Age */}
      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          {...register("age", {
            required: "Age is required",
            min: { value: 18, message: "Must be 18+" },
          })}
        />
        {errors.age && <p className="error">{errors.age.message}</p>}
      </div>

      {/* Role */}
      <div className="form-group">
        <label>Role</label>
        <select
          {...register("role", { required: "Please select a role" })}
        >
          <option value="">Select role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        {errors.role && <p className="error">{errors.role.message}</p>}
      </div>

      {/* Checkbox */}
      <div className="form-group checkbox">
        <input
          type="checkbox"
          {...register("agree", {
            required: "You must accept the terms",
          })}
        />
        <label>I agree to the terms & conditions</label>
        {errors.agree && <p className="error">{errors.agree.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default UserForm;
