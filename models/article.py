from models import db

# Define el modelo de la base de datos
class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    img_url = db.Column(db.String(255))

    def __repr__(self):
        return f'<Article {self.title}>'
    
