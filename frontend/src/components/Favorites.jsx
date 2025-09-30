import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchFavorites, clearAllFavorites } from '../store/favoritesSlice';
import { useNavigate } from 'react-router-dom';

const Favorites = () => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites.items);
  const status = useAppSelector(state => state.favorites.status);
  const token = useAppSelector(state => state.user.token);
  const navigate = useNavigate();
  const [isClearing, setIsClearing] = useState(false);

  useEffect(() => {
    if (!token) {
      navigate('/');
      return;
    }
    dispatch(fetchFavorites(token));
  }, [dispatch, token, navigate]);

  const handleClearAll = async () => {
    if (window.confirm('Are you sure you want to clear all your favorite books? This action cannot be undone.')) {
      setIsClearing(true);
      try {
        await dispatch(clearAllFavorites(token)).unwrap();
      } catch (error) {
        alert('Failed to clear favorites. Please try again.');
      } finally {
        setIsClearing(false);
      }
    }
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Failed to load favorites.</div>;

  return (
    <div>
      <h2>My Favorite Books</h2>
      {favorites.length === 0 ? (
        <div style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '400px',
          margin: '2rem auto',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          textAlign: 'center',
          color: '#888',
        }}>
          <p>No favorite books yet.</p>
          <p>
            Go to the <a href="/books" onClick={e => { e.preventDefault(); navigate('/books'); }}>book list</a> to add some!
          </p>
        </div>
      ) : (
        <div>
          <ul>
            {favorites.map(book => (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}
              </li>
            ))}
          </ul>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <button
              onClick={handleClearAll}
              disabled={isClearing}
              style={{
                background: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                cursor: isClearing ? 'not-allowed' : 'pointer',
                opacity: isClearing ? 0.6 : 1,
                transition: 'background 0.2s',
              }}
              onMouseOver={e => !isClearing && (e.currentTarget.style.background = '#c82333')}
              onMouseOut={e => !isClearing && (e.currentTarget.style.background = '#dc3545')}
            >
              {isClearing ? 'Clearing...' : 'Clear All Favorites'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Favorites;
