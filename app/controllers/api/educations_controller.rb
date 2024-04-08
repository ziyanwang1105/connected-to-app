class Api::EducationsController < ApplicationController
    wrap_parameters include: Education.attribute_names + ['userId', 'schoolName', 'degreeName', 'startYear', 'endYear']
    before_action :require_logged_in
    def create
        @education = Education.new(education_params)
        if @education.save
            @user = @education.user
            render 'api/users/show'
        else
            render json: @education.errors.full_messages, status: 422
        end
    end

    def update
        @education = Education.find_by(id: params[:id])
        if @education && @education.update(education_params)
            @user = @education.user
            render 'api/users/show'
        else
            render json: @education.errors.full_messages, status: 422
        end

    end

    def destroy
        @education = Education.find_by(id: params[:id])
        if @education && @education.destroy!
            # @user = @education.user
            # render 'api/users/show'
            head :no_content
        else
            render json: @education.errors.full_messages, status: 422
        end

    end

    private

    def education_params
        params.require(:education).permit(:user_id, :school_name, :degree_name, :description, :start_year, :end_year)
    end

end
