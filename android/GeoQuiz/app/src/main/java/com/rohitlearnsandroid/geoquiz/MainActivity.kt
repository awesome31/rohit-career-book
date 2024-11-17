package com.rohitlearnsandroid.geoquiz

import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import com.google.android.material.snackbar.Snackbar
import com.rohitlearnsandroid.geoquiz.databinding.ActivityMainBinding

private const val TAG = "MainActivity"

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    //This is a delegate function that does things like: Creating a QuizViewModel instance, returning the same instance when the configurations change etc.
    private val quizViewModel: QuizViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        Log.d(TAG, "onCreate is called")

        Log.d(TAG, "Got a QuizViewModel: $quizViewModel")

        binding = ActivityMainBinding.inflate(layoutInflater) //Automatically inflates a resource with name activity_main.xml
        setContentView(binding.root)

        binding.questionTextView.setOnClickListener { _: View ->
            quizViewModel.moveToNext()

            updateQuestion()
        }

        binding.trueButton.setOnClickListener { _: View ->

            if (quizViewModel.currentQuestionAnswered != true) {
                checkAnswer(true)
            }
        }

        binding.falseButton.setOnClickListener { _: View ->
            if (quizViewModel.currentQuestionAnswered != true) {
                checkAnswer(true)
            }

        }

        updateQuestion()

        binding.nextButton.setOnClickListener { _: View ->
            quizViewModel.moveToNext()

            updateQuestion()
        }

        binding.prevButton.setOnClickListener { _: View ->
            quizViewModel.moveToPrev()

            updateQuestion()
        }
    }

    private fun updateQuestion() {
        val questionTextResId = quizViewModel.currentQuestionText

        binding.questionTextView.setText(questionTextResId)
    }

    private fun checkAnswer(userAnswer: Boolean) {
        val rootView: View = findViewById(R.id.root_layout)

        if (userAnswer == quizViewModel.currentQuestionAnswer) {
            Snackbar.make(rootView, R.string.correct_toast, Snackbar.LENGTH_SHORT).show()
            quizViewModel.updateScore()

        } else {
            Snackbar.make(rootView, R.string.incorrect_toast, Toast.LENGTH_SHORT).show()
        }

        quizViewModel.updateCurrentQuestionAnswered(true)
    }

    override fun onStart() {
        super.onStart()

        Log.d(TAG, "onStart")
    }

    override fun onStop() {
        super.onStop()

        Log.d(TAG, "onStop")
    }

    override fun onResume() {
        super.onResume()

        Log.d(TAG, "onResume")
    }

    override fun onPause() {
        super.onPause()

        Log.d(TAG, "onPause")
    }

    override fun onDestroy() {
        super.onDestroy()

        Log.d(TAG, "onDestroy")
    }
}