from flask import request, jsonify
from flask_restful import Api, Resource, reqparse
from flask_login import login_required, current_user
from app.models import User, Review, Job
from app import app

api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('job_title', type=str, help='Job title is required')

class JobResource(Resource):
    @login_required
    def get(self, job_id):
        # Implement job retrieval logic
        pass

    @login_required
    def post(self):
        args = parser.parse_args()
        # Implement job creation logic
        pass


api.add_resource(JobResource, '/api/job/<int:job_id>', '/api/job')

@app.route('/api/jobs', methods=['GET'])
def get_jobs():
    # Implementation here
    pass

@app.route('/api/job/<int:job_id>', methods=['GET', 'POST'])
def job_details(job_id):
    # Implementation here
    pass

@app.route('/api/reviews', methods=['GET'])
def get_reviews():
    # Implementation here
    pass

@app.route('/api/review/<int:review_id>', methods=['GET', 'POST'])
def review_details(review_id):
    # Implementation here
    pass

@app.route('/api/jobs', methods=['GET', 'POST'])
@login_required
def jobs():
    if request.method == 'GET':
        jobs = Job.query.all()
        return jsonify({'jobs': [job.serialize() for job in jobs]})

    elif request.method == 'POST':
        data = request.json
        new_job = Job(
            title=data['title'],
            description=data['description'],
            location=data['location'],
            user=current_user
        )
        db.session.add(new_job)
        db.session.commit()
        return jsonify({'message': 'Job posted successfully'})

@app.route('/api/job/<int:job_id>', methods=['GET', 'PUT', 'DELETE'])
@login_required
def job(job_id):
    job = Job.query.get_or_404(job_id)

    if request.method == 'GET':
        return jsonify(job.serialize())

    elif request.method == 'PUT':
        data = request.json
        job.title = data['title']
        job.description = data['description']
        job.location = data['location']
        db.session.commit()
        return jsonify({'message': 'Job updated successfully'})

    elif request.method == 'DELETE':
        db.session.delete(job)
        db.session.commit()
        return jsonify({'message': 'Job deleted successfully'})

@app.route('/api/reviews', methods=['GET', 'POST'])
@login_required
def reviews():
    if request.method == 'GET':
        reviews = Review.query.all()
        return jsonify({'reviews': [review.serialize() for review in reviews]})

    elif request.method == 'POST':
        data = request.json
        new_review = Review(
            content=data['content'],
            rating=data['rating'],
            reviewer=current_user,
            reviewed_user=User.query.get(data['reviewed_user_id'])
        )
        db.session.add(new_review)
        db.session.commit()
        return jsonify({'message': 'Review posted successfully'})

@app.route('/api/review/<int:review_id>', methods=['GET', 'PUT', 'DELETE'])
@login_required
def review(review_id):
    review = Review.query.get_or_404(review_id)

    if request.method == 'GET':
        return jsonify(review.serialize())

    elif request.method == 'PUT':
        data = request.json
        review.content = data['content']
        review.rating = data['rating']
        db.session.commit()
        return jsonify({'message': 'Review updated successfully'})

    elif request.method == 'DELETE':
        db.session.delete(review)
        db.session.commit()
        return jsonify({'message': 'Review deleted successfully'})
