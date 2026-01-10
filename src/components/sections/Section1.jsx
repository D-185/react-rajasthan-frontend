import React from 'react';

const Section1 = ({ data }) => {
  return (
    <div className="section-1 bg-white p-6 rounded-lg shadow-sm mb-6 w-full">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        width: '100%',
        '@media (min-width: 768px)': {
          flexDirection: 'row'
        }
      }}>
        {data.imgUrl && (
          <div style={{
            flex: '0 0 auto',
            maxWidth: '400px',
            margin: '0 auto',
            '@media (min-width: 768px)': {
              width: '200px',
              height: '200px',
              margin: '0',
              flexShrink: '0'
            }
          }}>
            <img
              src={data.imgUrl}
              alt={data.name || 'Profile'}
              style={{
                width: "100%",
                objectFit: 'contain',
                borderRadius: '0.5rem',
                '@media (min-width: 768px)': {
                  width: '200px',
                  height: '200px'
                }
              }}
            />
          </div>
        )}
        <div style={{
          flex: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '@media (min-width: 768px)': {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            textAlign: 'left'
          }
        }}>
          <div style={{
            textAlign: 'center',
            '@media (min-width: 768px)': {
              textAlign: 'left'
            }
          }}>
            {data.role && <p style={{
              color: '#2563eb',
              fontWeight: '500',
              fontSize: '1.125rem',
              margin: 0
            }}>{data.role}</p>}
            {data.name && <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#111827',
              marginTop: '0.5rem',
              marginBottom: 0,
              '@media (min-width: 768px)': {
                fontSize: '1.875rem'
              }
            }}>{data.name}</h2>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
