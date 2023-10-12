import { toast } from 'react-toastify';
import css from './searchbar.module.css';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = ({ handleSubmit }) => {
  const [searchQuery, setSearchQuery] = useSearchParams();

  // Функція фіксації змін в полі input
  const onInputChange = evt => {
    setSearchQuery({ query: evt.currentTarget.value.toLowerCase() });
  };
  // Функція обробки відправки форми
  const onSubmit = evt => {
    evt.preventDefault();
    // Якщо поле порожне (з урахуванням пробілів) форма не відправиться, викликається повідомлення про помилку
    if (searchQuery.trim() === '') {
      toast.error('Enter a search query.');
      return;
    }
    handleSubmit(searchQuery);
    resetForm();
  };
  // Функція очищення поля вводу після відправки форми
  const resetForm = () => {
    setSearchQuery('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <button
          type="submit"
          className={css.button}
          aria-label="Submit search query"
        >
          <span className={css.buttonLabel}></span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={onInputChange}
        />
      </form>
    </header>
  );
};
