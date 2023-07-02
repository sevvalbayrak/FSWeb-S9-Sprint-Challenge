const mailInput = document.querySelector("#email");
const button = document.querySelector("#submit");

fireEvent.change(mailInput, { target: { value: "aasdfg@foo.bar" } });
fireEvent.click(button);

await waitFor(() => {
  const message = screen.queryByText("Ouch: email must be valid email");
  expect(message).toBeInTheDocument;
});

test("doğru email girildiğinde başarı mesajı veriyor", async () => {
  render(<AppFunctional />);

  const mailInput = document.querySelector("#email");
  const button = document.querySelector("#submit");

  fireEvent.change(mailInput, { target: { value: "aasdfg@gmail.com" } });
  fireEvent.click(button);

  await waitFor(() => {
    const message = screen.queryByText(/win/i);
    expect(message).toBeInTheDocument;
  });
});
