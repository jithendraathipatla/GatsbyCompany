import React, { useState } from "react"
import axios from "axios"
import { css } from "@emotion/core"


const Form = (props) => {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [phone, setphone] = useState()
  const handelingFormdata = e => {
    e.preventDefault()
    let client_name = e.target.elements.name.value
    let client_email = e.target.elements.email.value
    let phonenumber = e.target.elements.phone.value
    if (phonenumber.length > 10) {
      alert("Must enter a Valid Number")
    }
    const finalData = {
      Client_name: client_name,
      Client_email: client_email,
      Client_phone_number: phonenumber,
      Project_Name: props.project_name,
    }
      var data = {
      service_id: "gmail",
      template_id: "normal",
      user_id: "user_s9VasukllOwTDnR8R0FWD",
      template_params: finalData,
    }
     axios
      .post("https://api.emailjs.com/api/v1.0/email/send", data)
      .then(res => {
        console.log(res)
        alert("You will now be redirected.")
        // window.location = `/download-${props.link}/`
      })
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <form onSubmit={handelingFormdata} name="main_forma" method="post">
      <div>
        <br />
        <div className="field">
          <label css={label}>Name</label>
          <div className="control">
            <input
              css={input}
              type="text"
              name="name"
              required
              value={name}
              placeholder="e.g Alex Smith"
            />
          </div>
        </div>

        <div className="field">
          <label css={label}>Email</label>
          <div className="control">
            <input
              css={input}
              type="email"
              name="email"
              required
              value={email}
              placeholder="e.g. alexsmith@gmail.com"
            />
          </div>
        </div>

        <div className="field">
          <label css={label}>Phone Number</label>
          <div className="control">
            <div className="controlabc">
             
              <input
                css={input}
                type="number"
                name="phone"
                required
                minLength="10"
                maxLength="20"
                title="Must have 10 digit numbers"
                pattern="^\d{10}$"
                value={phone}
                placeholder="e.g. 999999999"
              />
            </div>
          </div>
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <button
            css={submitbutton}
            name="submit"
            type="submit"
            value="submit"
          >
            Submit
          </button>
        </div>
       
      </div>
    </form>
  )
}


const submitbutton = css`
  color: #fff;
  background: #9c27b0;
  border-color: #9c27b0;
  cursor: pointer;
    justify-content: center;
    padding: calc(.5em - 1px) 1em;
    text-align: center;
    white-space: nowrap;
    background-size: 400% 400%;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
`

const input = css`
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  width: -webkit-fill-available;
  background-color: #fff;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
  margin-bottom: 1em;
`

const label = css`
  color: #363636;
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5em;
  font-weight: 700;
`

export default Form;
