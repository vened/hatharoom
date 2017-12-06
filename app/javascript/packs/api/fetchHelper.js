import request from './request';

function fetchGET(url) {
  const headers = new Headers({});

  const options = {
    method: 'GET',
    headers,
  };

  return request(url, options);
}

function fetchPUT(url, body) {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const options = {
    method: 'PUT',
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
