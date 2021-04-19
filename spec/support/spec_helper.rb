module SpecHelpers
  def login_as_user(user)
    visit login_path
    fill_in 'email', with: user.email
    fill_in 'password', with: user.password
    find('input[name="commit"]').click
    expect(current_path).to eq(user_path(user))
  end
end