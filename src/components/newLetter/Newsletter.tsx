import arrowRightTwo from "../../assets/icons/arrow-right-two.png";
import { toast } from "react-toastify";

type FormEventHandler = {
  // eslint-disable-next-line no-unused-vars
  (event: React.FormEvent<HTMLFormElement>): void;
};

export const Newsletter = () => {
  const handleForm: FormEventHandler = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    form.reset();
    toast.success("Thanks For Your Email!");
  };

  return (
    <>
      <form className="newsletter style-two" onSubmit={handleForm}>
        <input
          type="email"
          placeholder="Your Email"
          className="form-control"
          name="email"
          autoComplete="off"
        />
        <button type="submit">
          <img src={arrowRightTwo} alt="Image Not Found" />
        </button>
      </form>
    </>
  );
};
