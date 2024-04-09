class Api::ExperiencesController < ApplicationController
    wrap_parameters include: Experience.attribute_names + ['userId', 'companyName', 'startYear', 'endYear']
    before_action :require_logged_in
    def create
        @experience = Experience.new(experience_params)
        if @experience.save
            @user = @experience.user
            render :show
        else
            render json: @experience.errors.full_messages, status: 422
        end
    end

    def update
        @experience = Experience.find_by(id: params[:id])
        if @experience && @experience.update(experience_params)
            @user = @experience.user
            render :show
        else
            render json: @experience.errors.full_messages, status: 422
        end

    end

    def destroy
        @experience = Experience.find_by(id: params[:id])
        if @experience && @experience.destroy!
            # @user = @experience.user
            # render 'api/users/show'
            head :no_content
        else
            render json: @experience.errors.full_messages, status: 422
        end

    end

    private

    def experience_params
        params.require(:experience).permit(:user_id, :company_name, :position, :description, :start_year, :end_year)
    end
end
