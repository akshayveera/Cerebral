
export async function getComp1Info(setData: any) {

    const URL = "https://cerebral-sigma.vercel.app/api/v1/component1";

    try {
      const response = await fetch(URL);
      const data =  await response.json();
      console.log("comp1", data);
      setData(data);
    } catch (err) {
      console.log(err);
    }

}

export async function getComp2Info(setData: any) {

    const URL = "https://cerebral-sigma.vercel.app/api/v1/component2";

    try {
      const response = await fetch(URL);
      const data =  await response.json();
      console.log("comp2", data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
}

export async function getComp6Info(setData: any) {

  const URL = "https://cerebral-sigma.vercel.app/api/v1/component6";

  try {
    const response = await fetch(URL);
    const data =  await response.json();
    console.log("comp6", data);
    setData(data);
  } catch (err) {
    console.log(err);
  }
}

export async function getComp3Info(setData: any) {

  const URL = "https://cerebral-sigma.vercel.app/api/v1/component3";

  try {
    const response = await fetch(URL);
    const data =  await response.json();
    console.log("comp3", data);
    setData(data);
  } catch (err) {
    console.log(err);
  }
}

export async function getComp5Info(setData: any) {

  const URL = "https://cerebral-sigma.vercel.app/api/v1/component5";

  try {
    const response = await fetch(URL);
    const data =  await response.json();
    console.log("comp5", data);
    setData(data);
  } catch (err) {
    console.log(err);
  }
}

export async function getComp4Info(setData: any) {

  const URL = "https://cerebral-sigma.vercel.app/api/v1/component4";

  try {
    const response = await fetch(URL);
    const data =  await response.json();
    console.log("comp4", data);
    setData(data);
  } catch (err) {
    console.log(err);
  }
}

export async function isAuthenticated(username:string, password: string) {

  const URL = "https://cerebral-sigma.vercel.app/api/v1/login/";

  const bodyData = {
    "username": username,
    "email": "user@gmail.com",
    "password": password,
    "phone_number": "1234567890",
    "input_code": 0
  }

  const response = await fetch(URL, {
    method: 'POST', 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData)
  })

  const data = await response.json();

  if(data?.message === "Successfully Logged in") {
    return true;
  } else {
    return false;
  }
  
}

export function getCommaseparated(num: number = 0): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
