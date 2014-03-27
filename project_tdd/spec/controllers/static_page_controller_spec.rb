require 'spec_helper'

describe StaticPageController do
	context	"when calling get home" do
		it "is successful" do 
			get :home
			expect(response.status).to eq(200)
		end
	end
end