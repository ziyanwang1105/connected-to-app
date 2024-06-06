class Api::PostingsController < ApplicationController
    wrap_parameters include: Posting.attribute_names + ['userId', 'jobPosting']
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @postings = Posting.all
        render :index
    end

    def show
        @posting = Posting.find_by(id: params[:id])
        if @posting
          render :show
        else
          render json: @posting.errors.full_messages, status: 404
        end
    end

    def create
        @posting = Posting.new(posting_params)
        if @posting.save
            @user = @posting.user
            render :show
        else
            render json: @posting.errors.full_messages, status: 422
        end
    end

    def update
        @posting = Posting.find_by(id: params[:id])
        if @posting && @posting.update(posting_params)
            @user = @posting.user
            render :show
        else
            render json: @posting.errors.full_messages, status: 422
        end

    end

    def destroy
        @posting = Posting.find_by(id: params[:id])
        if @posting && @posting.destroy!
            # @user = @experience.user
            # render 'api/users/show'
            head :no_content
        else
            render json: @posting.errors.full_messages, status: 422
        end
    end

    private

    def posting_params
        params.require(:posting).permit(:user_id, :title, :body, :job_posting)
    end
end
