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

    end

    def update


    end

    def destroy

    end

    private

    def posting_params
        params.require(:posting).permit(:user_id, :title, :body, :job_posting)
    end
end
