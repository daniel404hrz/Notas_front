import styles from "./form.module.css";
import { useState } from "react";
import verify from "./verify";
import axios from "axios";
export default function FormRE() {
  const [seePAS, setPAS] = useState(false);
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const seePasword = () => {
    setPAS(!seePAS);
  };
  const onChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    const newData = { ...form, [property]: value };

    setform(newData);
    setError(verify(newData, property, error));
    verify();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verifica si hay errores antes de enviar la solicitud
    if (!Object.values(error).some((errorMsg) => errorMsg)) {
      try {
        const url = 'https://notas-api-o9fj.onrender.com/user';
        const response = await axios.post(url, form);
        alert(response.data.id);
      } catch (error) {
        console.log('Error al realizar la solicitud: ' + error);
      }
    } else {
      alert('Corrige los errores en el formulario antes de enviar.');
    }
  };
  return (
    <div className={styles.box_container}>
      
      <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2>Crea tu usuario</h2>
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.inputField}
            placeholder=" "
            required
            onChange={onChange}
          />
          <label htmlFor="name" className={styles.label}>
            Username
          </label>
          <span>{error.name}</span>
        </div>
       
        
        <div className={styles.inputGroup}>
          <input
            type="text"
            name="email"
            id="email"
            className={styles.inputField}
            placeholder=" "
            required
            onChange={onChange}
          />
          <label htmlFor="email" className={styles.label}>
            Email address
          </label>
          <span>{error.email}</span>
        </div>

        <div className={styles.inputGroup}>
          <input
            type={seePAS ? "text" : "password"}
            name="password"
            id="password"
            className={styles.inputField}
            placeholder=" "
            required
            onChange={onChange}
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <span>{error.password}</span>
          <div className={styles.button_see}>
            <input type="checkbox" onClick={seePasword} />
            <p>Mostrar contraseña</p>
          </div>

        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
