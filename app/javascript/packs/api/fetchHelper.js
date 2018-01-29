import request from './request';

function fetchGET(url) {
  const options = {
    method: 'GET',
    credentials: 'include'
  };

  return request(url, options);
}

function fetchPUT(url, body) {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const options = {
    method: 'PUT',
    credentials: 'include',
    headers,
    body: JSON.stringify(body),
  };

  return request(url, options);
}

function fetchPATCH(url, body) {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const options = {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body),
  };

  return request(url, options);
}

function fetchPOST(url, body) {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const options = {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify(body),
  };

  return request(url, options);
}

function fetchDELETE(url) {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const options = {
    method: 'DELETE',
    headers,
  };

  return request(url, options);
}

export {
  fetchGET,
  fetchPUT,
  fetchPATCH,
  fetchPOST,
  fetchDELETE,
};
