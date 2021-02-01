interface HttpStatusCodes {
  OK: number;
  ACCEPTED: number;
  BAD_REQUEST: number;
  UNAUTHORIZED: number;
}

const HTTP_STATUS: HttpStatusCodes = {
  OK: 200,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

export default HTTP_STATUS;
