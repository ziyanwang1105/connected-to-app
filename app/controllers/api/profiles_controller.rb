class Api::ProfilesController < ApplicationController
    wrap_parameters include: Profile.attribute_names + ['lastName', 'firstName', 'openToWork']
    before_action :require_logged_in

    def create
        @profile = Profile.new(profile_params)
        if @profile.save
            @user = @profile.user
            render 'api/users/show'
        else
            render json: @profile.errors.full_messages, status: 422
        end
    end

    def update
        @profile = Profile.find_by(id: params[:id])
        if @profile && @profile.update(profile_params)
            @user = @profile.user
            render 'api/users/show'
        else
            render json: @profile.errors.full_messages, status: 422
        end
    end

    private
    def profile_params
        params.require(:profile).permit(:user_id, :last_name, :first_name, :heading, :open_to_work)
    end
end
